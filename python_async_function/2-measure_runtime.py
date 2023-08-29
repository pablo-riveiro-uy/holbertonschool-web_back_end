#!/usr/bin/env python3
""" messure the execution time of a function """

from typing import List
import time
import asyncio
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """ messure the execution time of a function """
    before: float = time.time()
    asyncio.run(wait_n(n, max_delay))
    total: float = time.time() - before
    return total / n
