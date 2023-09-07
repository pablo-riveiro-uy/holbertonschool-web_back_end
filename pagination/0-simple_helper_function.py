#!/usr/bin/env python3
"""  a helper function to get page number and pagination limit  """



def index_range(page: int, page_size: int) -> tuple:
    """  a helper function to get page number and pagination limit  """
    first: int = 0
    last: int = page_size

    if page != 1:
        last = page_size * page
        first = last / page_size * 10
    return(int(first), last)
