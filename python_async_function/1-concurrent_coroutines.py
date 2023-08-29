#!/usr/bin/env python3
""" asynchronous coroutine waits random time and return that time """

import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    values_lsit: List[float] = []
    for x in range(n):
        values_lsit.append(await wait_random(max_delay))
    return values_lsit
