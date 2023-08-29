#!/usr/bin/env python3
""" create and returns a asyncio task """
import asyncio

task_wait_random = __import__('3-tasks').task_wait_random


async def test(max_delay: int) -> float:
    """ create and returns a asyncio task """
    task = task_wait_random(max_delay)
    await task
    print(task.__class__)

asyncio.run(test(5))