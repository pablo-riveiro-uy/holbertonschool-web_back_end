#!/usr/bin/env python3
"""  yield random numbers waiting 1 second beyween """

import asyncio
from random import uniform
from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    """  yield random numbers waiting 1 second beyween """
    for i in range(10):
        await asyncio.sleep(1)
        yield uniform(0, 10)
