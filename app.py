from flask import Flask,Blueprint, render_template,url_for,request
import numpy as np
import pickle

app = Flask(__name__)

model=pickle.load(open("DecisionTree.pkl","rb"))

@app.route('/')
def welcome():
    return render_template('index.html')

@app.route('/predictor',methods=['GET','POST'])
def home():
    if request.method=='POST':
        instance=request.form
        weatherData=np.array([list(instance.values())])
        print(instance)
        print(weatherData)
        prediction=model.predict(weatherData)
        print(prediction)
        return render_template('predictor.html',form_valid=True,pred=prediction)
    return render_template('predictor.html',form_valid=False)

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0',port=55000)