#!/usr/bin/env python3
""" takes a multiplier function as an argument that returns a float  """

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    def multiplier(n) -> float:
        return n*n
    return multiplier
