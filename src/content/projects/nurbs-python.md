---
title: NURBS-Python
summary: Object-oriented B-spline and NURBS library in Python with convenient data structures and extensible algorithms.
description: NURBS-Python (geomdl) — pure Python B-spline and NURBS library for curves, surfaces, and volumes.
screenshot: /projects/nurbs-python/carousel/surf1_decompose.png
image: /projects/nurbs-python/carousel/ex_circle.png
order: 1
links:
  GitHub: https://github.com/orbingol/NURBS-Python
  Docs: https://nurbs-python.readthedocs.io/
  PyPI: https://pypi.org/project/geomdl/
gallery:
  - src: /projects/nurbs-python/carousel/ex_circle.png
    caption: Full circle w/ 9 control points
  - src: /projects/nurbs-python/carousel/ex_curve2d_unclamped.png
    caption: Unclamped 2-dimensional curve
  - src: /projects/nurbs-python/carousel/ex_curve3d_vectors.png
    caption: 3-dimensional curve with vectors
  - src: /projects/nurbs-python/carousel/ex_surface_vectors.png
    caption: Surface with vectors
  - src: /projects/nurbs-python/carousel/surf1_decompose.png
    caption: Bézier decomposition of a surface
  - src: /projects/nurbs-python/carousel/ex_cylinder_decompose.png
    caption: Bézier decomposition of a cylindrical surface
  - src: /projects/nurbs-python/carousel/ex_torus.png
    caption: Toroidal surface w/ control points grid
---

NURBS-Python (**geomdl**) is a pure Python object-oriented B-spline and NURBS library with convenient data structures and extensible algorithms.
The work is described in our [SoftwareX article](https://doi.org/10.1016/j.softx.2018.12.005).

## Features

- Self-contained, object-oriented, extensible, and highly customizable API
- Convenient data structures for storing curve, surface, and volume descriptions
- Surface and curve fitting with interpolation and least squares approximation
- Surface trimming
- Knot vector and surface grid generators
- Customizable visualization and animation with [Matplotlib](https://matplotlib.org/), [Plotly](https://plot.ly/python/), and [VTK](https://www.vtk.org/)
- Export to JSON, YAML, Libconfig, STL, OBJ, and VTK
- Complete documentation with references, examples, and illustrations
- Pure Python implementation (no C/C++ or Fortran dependencies required); optional Cython build for higher performance
- Install from [PyPI](https://pypi.org/project/geomdl/)
- Rhino `.3dm` import/export via [rw3dm](https://nurbs-python.readthedocs.io/en/latest/modules_rhino.html)

## References

- GitHub: [https://github.com/orbingol/NURBS-Python](https://github.com/orbingol/NURBS-Python)
- Documentation: [https://nurbs-python.readthedocs.io/](https://nurbs-python.readthedocs.io/)
- PyPI: [https://pypi.org/project/geomdl/](https://pypi.org/project/geomdl/)
- SoftwareX article: [https://doi.org/10.1016/j.softx.2018.12.005](https://doi.org/10.1016/j.softx.2018.12.005)
- For questions: `nurbs-python@googlegroups.com`
