#!/usr/bin/env python3
""" change topics of documentation based on the name """

import pymongo


def update_topics(mongo_collection, name, topics):
    """ change topics of documentation based on the name """
    for topic in topics:
        mongo_collection.update_many(
            {"name": name}, {"$set": {"topics": topic}})
