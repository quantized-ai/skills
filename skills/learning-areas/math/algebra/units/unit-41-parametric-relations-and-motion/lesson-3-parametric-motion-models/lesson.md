# Lesson 41.3: Parametric motion models

A time parameter coordinates horizontal and vertical motion and allows speed, timing, and geometric trajectory to be interpreted together.

## Learning objectives

- Construct and solve constant-velocity, uniform-circular, and idealized-projectile motion models.
- Relate angular velocity to linear speed with radian units and interpret intersections using a shared time.

## Proficiency criteria

- State physical assumptions, units, and the allowed time interval.
- Distinguish path intersections from simultaneous collisions and reject physically inadmissible times.

## Concepts

| Concept Title | Content | Learning Objectives | Proficiency criteria |
| --- | --- | --- | --- |
| **Constant-velocity motion** | For initial position $P_0=(x_0,y_0)$ and constant velocity $\mathbf v=\langle v_x,v_y\rangle$, position is $P(t)=P_0+t\mathbf v$. A contextual interval limits the traveled segment or ray. Two moving objects collide only if their two coordinate functions agree at the same allowed time; intersecting geometric paths alone do not establish a collision. | Construct constant-velocity parametric models and solve position, meeting-time, and collision conditions with a common time parameter. | Use consistent distance and time units, preserve the allowed interval, solve both coordinate conditions simultaneously, and distinguish a shared point from a simultaneous meeting. |
| **Uniform circular motion** | For radius $r>0$, center $(h,k)$, signed angular velocity $\omega$, and phase $\phi$, uniform circular motion is $x=h+r\cos(\omega t+\phi)$ and $y=k+r\sin(\omega t+\phi)$. With angles in radians, signed angular displacement is $\omega\Delta t$, arc distance for an elapsed interval is $r\lvert\omega\rvert\Delta t$, and linear speed is $r\lvert\omega\rvert$. For $\omega\ne0$, period is $2\pi/\lvert\omega\rvert$; $\omega=0$ gives a fixed point. | Build circular-motion parametrizations and relate angular displacement, angular velocity, linear speed, direction, and period. | Convert degree-based rates to radians when applying radius-times-angle formulas, distinguish signed angular velocity from nonnegative speed, and handle stationary motion separately. |
| **Idealized projectile motion** | With constant downward gravitational acceleration $g>0$, no air resistance, initial position $(x_0,y_0)$, speed $v_0\ge0$, and launch angle $\alpha$, use $x=x_0+v_0\cos\alpha\,t$ and $y=y_0+v_0\sin\alpha\,t-gt^2/2$. The physically allowed time ends at the relevant impact. Maximum height follows from the vertical quadratic; horizontal range depends on the admissible impact time and is not a universal same-height formula. | Construct and analyze idealized projectile parametrizations to determine admissible flight times, heights, ranges, and trajectories. | State the model assumptions and units, select physically relevant roots, analyze maxima on the actual time interval, and preserve trajectory restrictions when eliminating time. |
