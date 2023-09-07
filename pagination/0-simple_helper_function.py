#!/usr/bin/env python3
"""  a helper function to get page number and pagination limit  """

from math import trunc


def index_range(page: int, page_size: int):
    """  a helper function to get page number and pagination limit  """
    first = 0
    last = page_size
    if page == 1:
        pass
    else:
        last = page_size * page
        first = last / page_size * 10
    return(trunc(first), last)
