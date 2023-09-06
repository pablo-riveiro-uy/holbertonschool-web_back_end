#!/usr/bin/env python3
""" return list of school that have specific topic  """

import pymongo

from pymongo import MongoClient


if __name__ == "__main__":
    client = MongoClient('mongodb://127.0.0.1:27017')
    log_collection = client.logs.nginx

    method = ["GET", "POST", "PUT", "PATCH", "DELETE"]

    print("{} logs".format(log_collection.count_documents({})))
    print("Methos:")

    for m in method:
        print('\tMethod {}: {}'.format(
            m, log_collection.count_documents({"method": m})))

    print("{} status check".format(log_collection.count_documents(
        {"method": "GET", "path": "/status"})))
