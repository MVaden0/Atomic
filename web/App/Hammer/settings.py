import os
import json


class Settings:
    def __init__(self, settings_file):
        self.settings_file = settings_file

    def get(self, *args):
        file = open(self.settings_file)

        setting = json.load(file)

        for arg in args:
            arg = arg.upper()
            setting = setting[arg]

        return setting

cwd = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
settings_file = os.path.join(cwd, "settings.json")

settings = Settings(settings_file)
