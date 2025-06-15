---
layout: page
title: Multicopter Path Planning and Mission Designing
description: Design and development of Quadcopter and Hexacopters for level 4 autonomy
img: assets/img/website_project5.gif
importance: 5
category: Recents
related_publications: true
---

Worked on designing robust guidance-navigation-control architecture for level 4 autonomous drones for precision agriculture in Indian private and government agriculture sectors. During my undergrad, as a GNC developer at <a href="https://generalaeronautics.com/">General Aeronautics Pvt Ltd</a> and research intern at <a href="https://sites.google.com/site/cintlabsno">Computational Intellegence Lab</a>, Indian Institute of Science, my responsibilities were centered on designing `Software-In-The-Loop (SITL)` and `Hardware-In-The-Loop (HITL)` modules for integrating custom RGBD and LiDAR-based obstacle detection with local Artificial Potential Field (APF) and <a href="https://github.com/Xploror/Col_avd_approach/tree/main/Dyn_window_avd">Dynamic Window Approach (DWA)</a> based collision avoidance techniques, simulateneously tracking high-precision drone kinematics with `GPS RTK`, `laser altimetry` and `RGBD based visual odometry`.  

Interfaced and tested obstacle avoidance and radar-based ground clearance algorithm on non-compatible CAN-BUS interface with the `Pixhawk Orange Cube`, `RPI 4B` & `Jetson Nano`. With the objective of Variable Rate Application (VRA) in agricultural field, the decision making <a href="https://www.ros.org/">ROS</a> scripts were implemented for executing circular navigation around detected tree canopy and a zigzag AUTO mode maneuvering for every row crops. The detection mechanism was based on visually differentiating between a target and an obstacle that was impletmented by training a CNN-based <a href="https://github.com/Xploror/Custom_Object_detection">Yolov6 object detection</a> model for over 100,000+ images of local crops, trees and possible obstacles. Additionally, a custom `MiDaS based depth estimation` algorithm was developed over a low-budget monocular camera for establishing a cone of object detection along the heading!

During this time, I was engaged in solving a very interesting problem on optimizing a reference tracking guidance-control architecture {% cite aryan2025 %} while considering the existance of quadcopter actuator's non-negligible stochastic response to the control commands on top of well-studied measurement and process noise in the system. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project4_img/monocular_depth.gif" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project4_img/apf_avoidance.gif" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project4_img/circular_nav.gif" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    On the left is monocular-depth camera interface with SITL quadcopter's ROS master script. Middle represents the APF algorithm overriding Ardupilot mission during every obstacle detection. The right plot shows the circular maneuvering around a suspected target for canopy spraying.
</div>
