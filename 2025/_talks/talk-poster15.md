---
name: 'Domain Randomization using Synthetic Data for Grease Bin Semantic Segmentation'
speakers:
  - Sean Chen
  - Khalid Mohammed
  - Nicholas Haisler
  - Haris Mehuljic
  - Nico Gonnella
  - Md Reza
  - Eric Manley
categories:
  - Poster
program_hide: true
---

Training robust visual models often requires large, diverse datasets, but collecting real-world data can be costly and time-consuming. To address this challenge, we explore the use of synthetic data for training segmentation models, focusing on container and liquid volume estimation as a downstream application. We generated a synthetic dataset in Blender with varied textures, lighting, viewpoints, and environments to improve segmentation performance. Using HRNetV2, we fine-tuned a model for synthetic-to-real domain adaptation, demonstrating the potential of synthetic data to supplement limited real-world datasets. While this work focuses on segmentation as a precursor to volume estimation, our approach generalizes to other computer vision tasks requiring synthetic data augmentation. The findings contribute to cost-effective model training, reducing the need for extensive real-world data collection.

![Domain Randomization using Synthetic Data for Grease Bin Semantic Segmentation]({{ site.baseurl }}/assets/images/posters/poster15.jpg)
