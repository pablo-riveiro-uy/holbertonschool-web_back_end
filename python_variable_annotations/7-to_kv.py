#!/usr/bin/env python3
""" takes a str, float or float and returns a tuple of value """

from typing import Union, Tuple


def to_kv(text: str, v: Union[int, float]) -> Tuple[str, float]:
    """ takes a str, float or float and returns a tuple of value """
    result: float = v**2
    return [text, result]
