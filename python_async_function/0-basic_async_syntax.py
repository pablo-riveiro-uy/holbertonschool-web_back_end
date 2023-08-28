#!/usr/bin/env python3
""" asynchronous coroutine waits random time and return that time """

import asyncio
from random import uniform


async def wait_random(max_delay: int = 10) -> float:
    wait_time: float = uniform(0, max_delay)
    await asyncio.sleep(wait_time)
    return wait_time

asyncio.run(wait_random())
