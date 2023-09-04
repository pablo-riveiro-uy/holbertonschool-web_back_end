#!/usr/bin/env python3
""" insert documents """

def insert_school(mongo_collection, **kwargs):
    """ insert documents """
    document_id = mongo_collection.insert(kwargs)
    return document_id

