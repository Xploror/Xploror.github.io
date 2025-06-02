---
layout: page
title: Lunar Network Emulation
description: Master's Thesis on Interoperable Earth-Lunar communication service architecture
img: assets/img/website_project12.png
redirect: 
importance: 1
category: Upcoming
related_publications: true
---

Space communication from its genesis has played a key role in providing secure, high-speed global services that are accessible to most terrestrial users anywhere on Earth. However, with a plethora of upcoming space missions planned for at least the next decade, the Cislunar regime plays a centerpiece in all the missions. A dedicated satellite constellation around the moon and a dedicated relay system in the Cislunar space can greatly enhance the efficiency of accessing Earth, additionally also acting as a sustainable means of cislunar and deep-space communication. This thesis work aims to have an initial design architecture motivation from NASA & ESA's LunaNet concept on a high-fidelity lunar frozen constellation with supporting relay satellites acting as gateways between Earth and Lunar constellations.

The study focus on designing constellations that could support communication and PNT services for lunar surface and orbiting users. Initial studies are based on providing these services to the high-density terminals on South pole, thus shortlisting to an Elliptical Lunar Frozen Orbit (ELFO) scenario!

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project1_img/stk_viz_cropped.gif" title="ELFO STK Visualization" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Elliptical Lunar Frozen Orbit (ELFO) STK Visualization.
</div>

Virginia Tech's SpaceNet emulator {% cite downs2025 %} leveraged to analyze the network perforamance between specified source and destination nodes. The emulator's flexible support for inertial/non-inertial users and dynamics block allows for near-realistic values of latency and throughput metrics. Figures below show one of the initial experiment of the testbed's lunar support with the associated Round Trip Time (RTT) plot.   

<div class="row">
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project1_img/lunar_testcase.gif" title="Lunar testcase" class="img-fluid rounded z-depth-1" %}
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
    Sea of Tranquality to Schrodinger Basin ping test.
</div>
