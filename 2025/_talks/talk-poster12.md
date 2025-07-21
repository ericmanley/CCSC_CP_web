---
name: 'INADS: A Multi-Layered Machine Learning Architecture for Anomaly Detection in Critical Network Infrastructures'
speakers:
  - Akash Thanneeru
  - Prabhu Kumar Athukuri
  - Maneesha Karamsetty
  - Rishil Reddy Dandoori
  - Zhengrui Qin
categories:
  - Poster
program_hide: true
---

The growing sophistication, scale, and diversity of modern cyberattacks—ranging from volumetric DDoS floods to stealthy, low-and-slow intrusions—pose significant challenges to traditional detection systems. These evolving threats demand adaptive, multi-perspective defense mechanisms capable of analyzing network traffic from different vantage points to ensure comprehensive and timely anomaly detection.  This poster presents the Intelligent Network Anomaly Detection System (INADS), a novel multi-layered framework that integrates machine learning models across the Global, Edge, and Device layers of the TCP/IP stack.  At the Global Layer, XGBoost identifies high-volume attacks (e.g., DDoS, DoS, brute force) with high accuracy across large-scale traffic. The Edge Layer employs LSTM networks to detect behavioral and temporal anomalies, effectively capturing patterns in flow sequences. The Device Layer combines Isolation Forest with a Multi-Layer Perceptron (MLP) to address endpoint-level threats, such as stealthy infiltrations and potential zero-day attacks. A Core Fusion Layer consolidates decisions from all layers using a weighted averaging scheme to generate a final anomaly confidence score.  INADS was evaluated on the CSE-CIC-IDS-2018 dataset following extensive preprocessing, feature engineering, and correlation analysis. Results show detection accuracies exceeding 96% at the Global and Edge layers, with the Device Layer demonstrating strong precision for known attacks and ongoing improvements for detecting infiltration.  INADS lays the groundwork for future enhancements, including blockchain-based logging for tamper-proof forensics, federated learning for decentralized updates, reinforcement learning for adaptive thresholds, and multi-layer encryption for enhanced data privacy.  Together, these innovations position INADS as a scalable, adaptive, and real-time solution for next-generation network intrusion detection.