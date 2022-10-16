from flask import Flask, jsonify, request, Response
from flask_cors import CORS
from dow_30 import getESGScore
from esg_visual import ESG_Calculator

app = Flask(__name__)
CORS(app)

@app.route("/")
def default():
    return ""

@app.route("/get-dow-30")
def get_dow_30():
    def formatDow30ESG(ticker):
        [soc, gov, env] = getESGScore(ticker)
        dataObj = {"companyName": ticker, "soc": soc, "gov": gov, "env": env}
        return dataObj

    ticker1 = request.args.get("ticker1", None)
    ticker2 = request.args.get("ticker2", None)

    obj1 = formatDow30ESG(ticker1) if ticker1 else None
    obj2 = formatDow30ESG(ticker2) if ticker2 else None
    arr = []

    for obj in [obj1, obj2]:
        if obj:
            arr.append(obj)

    res = jsonify(arr)

    # res.headers.add('Access-Control-Allow-Origin', '*')
    return res

@app.route("/get-esg-visual", methods=["POST"])
def get_esg_visual():
    def formatTextESG(text):
        (total, env, soc, gov, myDict) = ESG_Calculator(text)
        dataObj = {"total": total, "env": env, "soc": soc, "gov": gov, "dict": myDict}
        res = jsonify(dataObj)
        return res

    text = request.json
    res = formatTextESG(text)
    return res

if __name__ == '__main__':
    # Threaded option to enable multiple instances for multiple user access support
    app.run(threaded=True, port=5000)