---
layout: page
title: Lunar Network Digital Twin
description: Master's Thesis on sustainable Earth-Lunar communication & navigation service architecture
img: assets/img/website_selenonet_cover.png
redirect: 
importance: 1
category: Recents
related_publications: true
---

Space communication from its genesis has played a key role in providing secure, high-speed global services that are accessible to most terrestrial users anywhere on Earth. However, with a plethora of upcoming space missions planned for the next couple of decades, the cislunar regime will be the next frontier. A dedicated satellite constellation around the moon and a dedicated relay system in cislunar space can greatly enhance the efficiency of accessing Earth, additionally also acting as a sustainable means of deep-space communication. This thesis work aims to analyze an initial design architecture motivated from NASA, ESA & JAXA’s LunaNet concept with a stable lunar constellation model (specifically the Elliptical Lunar Frozen Orbits) with relay satellites acting as gateways between Earth and Lunar network nodes. Moreover, various forms of delay and disruptive scenarios are designed to stress-test the communication and navigation performances for various types of lunar users. The validation of high-fidelity cislunar dynamics is implemented in Ansys STK simulation and the performance analysis is derived using the developed simulation framework called, SelenoNet and its core deep-space communication and navigation process architecture.

The study focus on designing constellations that could support communication and PNT services for lunar surface and orbiting users. Initial studies are based on providing these services to the high-density terminals on South pole, thus shortlisting to an `Elliptical Lunar Frozen Orbit (ELFO)` scenario!

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project1_img/stk_viz_cropped.gif" title="ELFO STK Visualization" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Elliptical Lunar Frozen Orbit (ELFO) STK Visualization.
</div>

SelenoNet brings together a high-fidelity instantiation of Earth based control ground stations, relay satellite systems in the Cislunar regime and a lunar service constellation systems (Walker or ELFO types) with all levels of relevant interactions needed to support sustainable communication and navigation services to the lunar-based users. Its support for both lunar orbits as well as Earth-Moon L1 Lissajous & Halo orbits with a backend RFC-9174 based BPv7 deep space communication protocol allows a realistic emulation of transreceiving signals between Earth. Moreover, the lunar main constellation has additional navigation data broadcating support that the simulated lunar receivers can actively listen to and estimate their precise point positions, additionally, also running an Extended Kalman Filter (EKF) algorithm to ameliorate the positions for both inertial and non-inertial kinematics.      

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project1_img/relaying.gif" title="Relaying STK visualization" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project1_img/static_thesis.gif" title="Stationary user on Moon surface" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project1_img/orbiting_thesis.gif" title="Lunar orbiting user" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Position-Navigation-Timing Least Square (orange) and EKF (purple) point position estimates for a stationary user at South pole and a lunar orbiting user. [16sat ELFO navigation constellation.]
</div>

Virginia Tech's SpaceNet emulator {% cite downs2025 %} leveraged to analyze the network perforamance between specified source and destination nodes. The emulator's flexible support for inertial/non-inertial users and dynamics block allows for near-realistic values of latency and throughput metrics. Figures below show one of the initial experiment of the testbed's lunar support with the associated Round Trip Time (RTT) plot.   

<div class="row">
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project1_img/lunar_testcase_80elfo.gif" title="ELFO Lunar testcase" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-7 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project1_img/Lunar_Tranquality_Schrodingerbasin.png" title="ping results" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Sea of Tranquality to Schrodinger Basin ping test.
</div>

The designing of the constellation was done with `particle swarm multi-objective optimization` with the objective of maximizing total coverage area, minimizing dilution of precision for south pole and maximizing the career-to-noise density ratio, so that the resultant constellation with sufficient bounds on number of satellites and orbits is capable of providing sufficient quality of service (QoS). The pareto swarm members represent such optimal constellations and with every iteration the swarm closes more towards the optimal phase space. One such optimal constellation is shown below where the white markers represent the satellites with direct line of sight with South pole.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project1_img/vid1_black.gif" title="optimized_ELFO" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project1_img/gif_black.gif" title="paretos" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Multi-Objective Particle Swarm Optimization of ELFO constellations for Lunar users
</div>
