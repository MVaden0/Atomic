import os
from Hammer.settings import get_setting


def make_component(component_dir, component_name):
    directory_exist = os.path.isdir(f"{component_dir}{component_name}")

    if directory_exist:
        pass
    else: 
        pass