#!/usr/bin/env python3
""" takes a multiplier function as an argument that returns a float  """

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """ takes a multiplier function as an argument that returns a float  """
    def mult(n: float) -> float:
        return n * multiplier
    return mult
