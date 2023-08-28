#!/usr/bin/env python3
""" annotate and return corectlly the below function parameters """

from typing import Iterable, List, Tuple, Sequence


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """ annotate and return corectlly the below function parameters """
    return [(i, len(i)) for i in lst]
