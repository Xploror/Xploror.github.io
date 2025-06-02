---
layout: page
title: Distributed Asteroid Inspection Simulation
description: Distributed GNC Architecture for Optimized Asteroid Inspection
img: assets/img/website_project2.png
importance: 2
category: Upcoming
giscus_comments: false
---

With recent scientific interest in extracting resources and studying surface dynamics of the asteroids, proximity asteroid inspection is a crucial task of scientific interest for any asteroid rendezvous mission. The research aims to design a reference tracking adaptive Model Predictive Control (MPC) to optimally deal with the stochasticity in the dynamics proximal to an irregular-shaped asteroid and the model uncertainties due to the imperfect navigation and inertial measurements of individual distributed inspector mini-spacecrafts. A host/chief spacecraft once aligned to the asteroid's orbit deploys the mini-spacecraft towards the target asteroid after which a distributed guidance-control architecture robustly assigns the individual mini-spacecrafts into re-configurable orbits with the ultimate objective of executing a 3D asteroid inspection without breaking communications between the mini-spacecrafts and the host. 

This project work is highly focused on constructing a robust Guidance-Control Architecture which firstly involves selection of a suitable gravity model for the asteroid as a nominal dynamics model for the controller. Then, an Unscented Kalman Filter (UKF) is used for nonlinear estimation to realize the stochastic state and actuation distributions that are feed-forwarded to the stochastic MPC control optimization with hard constraints on proximity distance and collision avoidance. The orbit planning control scheme tracks the inspection cost and reconfigures the mini-spacecraft's orbits for optimal output. 

<div class="row">
    <div class="col-sm-5 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project2_img/non_frozen_arbitrary_216kleopatra.jpg" title="polyhedral motion" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-7 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project2_img/flowchart.jpeg" title="overall architecture" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

To deal with possible abrupt shifts in dynamics near asteroids, the receding horizon MPC control is cascaded with an adaptive Sliding Mode Controller that handles the unmatched uncertianty from the polyhedral gravity model. Overall, the top-level view of the architecture implements state estimations, orbit planning block, inspection progress-map and cost-map, and control block.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project2_img/x_tracking.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project2_img/y_tracking.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project2_img/z_tracking.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Adaptive Sliding Mode Control convergence results with two-body reference model and polyhedral gravity mdoel as actual dynamics 
</div>

