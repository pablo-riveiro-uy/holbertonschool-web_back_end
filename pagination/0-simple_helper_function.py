#!/usr/bin/env python3
"""  a helper function to get page number and pagination limit  """


def index_range(page: int, page_size: int) -> tuple:
    """  a helper function to get page number and pagination limit  """

    last = page_size * page
    first = (page - 1) * page_size
    return (first, last)
