#!/usr/bin/env python3
"""  yield random numbers waiting 1 second beyween """

import asyncio
from random import uniform


async def async_generator() -> float:
    for i in range(10):
        await asyncio.sleep(1)
        yield uniform(0, 10)
