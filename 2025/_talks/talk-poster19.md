---
name: 'Optimizing Analog Computation: A Smart Dual-Railing Approach for Efficient Compilation'
speakers:
  - Andrei Migunov
  - Khalid Mohammed
  - Garrett Provence
  - Nicholas Haisler
categories:
  - Poster
program_hide: true
---

Analog computation models such as General Purpose Analog Computers (GPACs) and Chemical Reaction Networks (CRNs) enable continuous and molecular-scale computation. We build on our prior work presented at CCSC 2024, where we are developing a Python-based compiler, inspired by the work of Huang and Huls (2022), that converts GPACs into Population Protocols (PPs). In this work, we focus on a key early stage transformation known as Dual-Railing, which ensures that a given GPAC system is CRN implementable. We further optimize the current method, by applying Tarjan’s algorithm to analyze variable dependencies. This allows for a reduction in the size of the output system, thus improving efficiency throughout the compiler’s pipeline.   This research was supported in part by Department of Energy Office of Science Award DE-SC0024278.