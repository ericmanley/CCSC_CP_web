---
name: 'Machine Learning for Bank Failure Prediction: Enhancing Early Warning Systems'
speakers:
  - Khalid Mohammed
  - Coleman Pagac
  - Rediet Ayalew
  - Braedon Stapelman
  - Eric Manley
  - Sean Severe
categories:
  - Poster
program_hide: true
---

Accurately predicting bank failures is crucial for financial stability, risk management, and regulatory intervention. However, the imbalance in failure data and the complexity of financial indicators make traditional predictive models less effective. To improve early detection, we explore machine learning and neural network architectures, evaluating logistic regression, random forest, XGBoost, and deep learning models, including LSTMs, GRUs, CNN-LSTM hybrids, and transformer-based networks. Our approach incorporates HEALTH, a continuous score representing a bank’s overall financial health, based on key indicators such as capital adequacy, asset quality, liquidity, and profitability. We attempt to classify when banks have failed by predicting whether HEALTH has fallen below a well-established threshold. Additionally, we use regression-based approaches to directly predict the numerical value of HEALTH, allowing for a more granular assessment of financial risk. We apply feature engineering techniques such as rescaling HEALTH to emphasize lower values, allowing models to better capture early signs of distress, and adjust model weighting to account for the rarity of bank failures. Performance analysis reveals that XGBoost consistently outperforms other models in classification tasks, achieving the highest AUC scores, while deep learning architectures with attention mechanisms show promise in capturing long-term dependencies. Hyperparameter tuning, including adjustments to model weighting strategies and learning rate optimization, further improves accuracy. These findings contribute to more reliable early warning systems for banking regulators, enabling proactive intervention, reducing systemic financial risk, and improving decision-making for financial institutions by offering more accurate, data-driven risk assessments.

![Machine Learning for Bank Failure Prediction: Enhancing Early Warning Systems]({{ site.baseurl }}/assets/images/posters/poster09.jpg)
