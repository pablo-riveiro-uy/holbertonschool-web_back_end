#!/usr/bin/env python3
""" return list of school that have specific topic  """

import pymongo


def schools_by_topic(mongo_collection, topic):
    """ return list of school that have specific topic  """
    return mongo_collection.find({"topics": topic})
