# Play-Tennis

## Overview
The **Play-Tennis** project is an implementation of a decision tree algorithm to determine whether to play tennis based on weather conditions. This project utilizes machine learning concepts to classify the given dataset and predict the outcome.

## Features
- Implements a decision tree learning algorithm
- Uses a small dataset with weather conditions
- Predicts whether to play tennis based on historical data
- Demonstrates fundamental machine learning concepts

## Technologies Used
- Python
- NumPy
- Pandas
- Scikit-learn
- Matplotlib (for visualization)

## Dataset
The dataset contains weather attributes such as:
- **Outlook** (Sunny, Overcast, Rainy)
- **Temperature** (Hot, Mild, Cool)
- **Humidity** (High, Normal)
- **Wind** (Weak, Strong)
- **PlayTennis** (Yes, No) - Target variable

## Installation and Setup
### Prerequisites
Ensure you have the following installed:
- Python 3.x
- pip package manager

### Clone the Repository
```sh
https://github.com/chethankumar-g/Play-Tennis.git
cd Play-Tennis
```

### Install Dependencies
```sh
pip install -r requirements.txt
```

## Usage
Run the script to train the model and predict outcomes:
```sh
python app.py
```

## Expected Output
The program will output:
1. Decision tree structure
2. Accuracy of the model
3. Predictions based on test cases

## Example Decision Tree Output
```
|--- Outlook = Sunny
|   |--- Humidity = High --> No
|   |--- Humidity = Normal --> Yes
|--- Outlook = Overcast --> Yes
|--- Outlook = Rainy
|   |--- Wind = Weak --> Yes
|   |--- Wind = Strong --> No
```

## Contributing
Contributions are welcome! Follow these steps to contribute:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature-branch`)
3. Commit changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a Pull Request


## Contact
For any queries, reach out to:
- **Chethan Kumar G**
- GitHub: [@chethankumar-g](https://github.com/chethankumar-g)
- Email: chethan.ci22@bmsce.ac.in

