#!/usr/bin/env python3
""" take a mixed list of int and float, returns flot sum """

from typing import List, Union


def sum_mixed_list(mxd_list: List[Union[int, float]]) -> float:
    """ take a mixed list of int and float, returns flot sum """
    return (sum(mxd_list))
