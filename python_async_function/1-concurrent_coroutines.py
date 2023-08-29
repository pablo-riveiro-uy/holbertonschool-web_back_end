#!/usr/bin/env python3
""" wait for a waiting  function n times """

from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """ wait for a waiting  function n times """
    values_lsit: List[float] = []
    for x in range(n):
        values_lsit.append(await(wait_random(max_delay)))
    return sorted(values_lsit)
