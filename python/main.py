inventory = [
{ "name": "ab", "qty": 15, "price": 2.99 },
{ "name": "cd", "qty": 5, "price": 3.99 },
{ "name": "ij", "qty": 3, "price": 1.99 },
{ "name": "xy", "qty": 20, "price": 1.99 }
]

import argparse
import os
import sys

def eq(stri):
        print('eq')
        return
def ne(stri):
        print('ne')
        return    
FUNCTION_MAP = {'$eq' : eq,
                '$ne' : ne }
if __name__ == '__main__':

        parser = argparse.ArgumentParser()
        parser.add_argument('command', choices=FUNCTION_MAP.keys())
        parser.add_argument('values', nargs='*')
        args = parser.parse_args()
        func = FUNCTION_MAP[args.command]
        func(args)