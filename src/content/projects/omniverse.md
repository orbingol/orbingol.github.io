---
title: NVIDIA Omniverse
summary: A collection of digital twin and robotics demos built with NVIDIA Omniverse and OpenUSD.
description: Factory simulation and robotics applications using NVIDIA Omniverse Platform.
screenshot: /projects/omniverse/factory-sims.jpg
order: 2
category: 1
enabled: true
schemaType: CreativeWork
videos:
  - title: Manufacturing Workcell
    url: https://www.youtube.com/watch?v=1MuVXlOCRCk
    date: "2025-06"
    description: >-
      Short demo of a manufacturing workcell digital twin, built with NVIDIA Omniverse.
    sections:
      - title: Overview
        body: |
          This demo illustrates the digital twin of a manufacturing workcell equipped with two robots and rails
          and a custom end of arm tooling.
      - title: Technical details
        collapsed: true
        body: |
          This short demo illustrates a part of my work at Machina Labs on Virtual Robocraftsman.

          The digital twins of FANUC M1000iA 6-axis robots and the rails are generated from Solidworks models in USD format.
          The physics components of the digital twins are generated from the Denavit-Hartenberg parameters of the robots and
          the workcell for accurate joint-level dynamics.

          The simulation software stack is built on top of the Nvidia Omniverse platform, using a customized version of
          the `kit-app-template` tooling for compiling and installing proprietary software developed in-house. This
          tooling also handles sample data generation and several other maintenance tasks for development and deployment.

          The digital twin of the part displayed on the frame is generated from real-world data collected during
          sheet-metal manufacturing. The point cloud to USD conversion tooling is integrated into the workcell data
          collection pipeline to speed up access to the digital twins of the manufactured parts from the Omniverse platform.
  - title: Layer-by-layer Manufacturing with USDRT and Fabric
    url: https://www.youtube.com/watch?v=OUDxJHNdlus
    date: "2024-11"
    description: >-
      Early USDRT and Fabric implementation of a digital twin, showing layer-by-layer manufacturing steps
      from the real data.
    sections:
      - title: Overview
        body: |
          A very early implementation of **USDRT** and **Fabric** illusrating the layer-by-layer generation
          steps of the robotics-assisted manufacturing process.

          The digital twin of the part was generated from real-world data collected by the workcell
          during sheet-metal manufacturing.
  - title: Factory Simulations using NVIDIA Omniverse Platform
    url: https://www.youtube.com/watch?v=BCiEpc9TmqY
    date: "2023-12"
    description: >-
      Full factory simulation with five workcells, each containing two robotic manupilator digital twins,
      running together in Isaac Sim.
    sections:
      - title: Overview
        body: |
          This demo is a full factory simulation: **five robotic workcells** running at once,
          with **ten manipulator digital twins** coordinating in a shared Omniverse scene.

          The goal was to show that a virtual factory could mirror real operations at scale.
          It is not a single cell in isolation, but multiple bays executing together so teams can
          see interactions, timing, and layout decisions before they hit the floor.
      - title: Technical details
        collapsed: true
        body: |
          This virtual factory consists of five wood-product handling bays. Each bay contains digital
          twins of two FANUC R-2000iC/125L 6-axis robots equipped with a custom in-house designed area
          gripper.

          The digital twins in USD format are generated from the CAD models using a custom in-house software
          framework developed as an extension for Autodesk Fusion 360. The virtual world and the virtual
          robot controllers are developed using a custom in-house software framework built on top of Isaac Sim,
          utilizing the extension and message bus subsystems of the Omniverse platform.
  - title: Box Palletizing Demo for Omniverse Robotics
    url: https://www.youtube.com/watch?v=b594aO9n4nU
    date: "2023-02"
    description: >-
      NVIDIA GTC 2023 palletizing demo in Isaac Sim.
    sections:
      - title: Overview
        body: |
          This demo was featured at **NVIDIA GTC 2023.** This was one of the unique applications which illusrated
          the capabilities of a very early (beta) version of Isaac Sim alongside with a fully-featured digital twin
          framework integrated in Autodesk Fusion 360.

          Please refer to [our talk](https://www.nvidia.com/en-us/on-demand/session/gtcspring23-s51494/) for more
          details on the software frameworks we built for Isaac Sim and Fusion 360.
      - title: Technical details
        collapsed: true
        body: |
          This virtual factory environment illusrates a single palletizing bay. The setup consists of a digital twin of a
          FANUC M-710iC/50 5-axis robot equipped with a digital twin of the Schmalz FXCB area gripper.

          The digital twins of the robot and the gripper were developed using a custom in-house digital twin framework
          developed as an extension to Autodesk Fusion 360. The same extension also helped us to generate the URDF
          files required to run the RMPflow algorithm. The digital twin of the manipulator is controlled by a custom
          virtual robotics controller designed to track the boxes at a distance and pick when they get closer to the
          manipulator. Then, the picked boxes are placed on to the pallets. The software framework on the Isaac Sim side
          utilizes the extension framework of the Omniverse platform.
---

Selected demos from my work on digital twins, factory simulation, and robotics with
[NVIDIA Omniverse](https://www.nvidia.com/en-us/omniverse/) and [OpenUSD](https://openusd.org).

They highlight simulation pipelines, Omniverse integration, and digital twin generation. These are recurring
threads in my broader work in computational geometry, solid and geometric modeling, computer graphics, and
GPU-accelerated computing.

## How It Started

I've always been drawn to systems that connect the physical and the simulated. That curiosity took shape during
my Ph.D., when our lab happened to sit right next to the Cyber-Physical Systems Lab. I asked the professor
running it if I could get involved, and ended up helping his students write software for robots like the
TurtleBot and the Sawyer arm. That connection carried into my postdoc at the same lab, where I had the chance to
work on several interesting cyber-physical systems projects, mostly using Gazebo, which was solid and well
integrated with ROS, though never a tool I found particularly intuitive for development or visualization.

Things shifted toward NVIDIA's ecosystem during my time at PARC in 2021, when I got my hands on a very early
alpha of Isaac Sim and started experimenting with it, building on what I'd learned from Gazebo. That curiosity
carried over later that year at RIOS Intelligent Machines, where I had the chance to build simulations with
Isaac Sim directly, which became the starting point for the Omniverse-based work shown on this page.
