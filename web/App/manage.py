import os
import sys

from click import command

from Hammer.settings import settings


def run():
    os.chdir("Hammer")
    os.system("gunicorn app:app")

def make_component(component_name):
    component_dir = settings.get("directories", "components")
    directory_exist = os.path.isdir(f"{component_dir}/{component_name}")

    if directory_exist:
        raise Exception(f"There is already a component named {component_name}.")
    else: 
        os.mkdir(f"{component_dir}/{component_name}")
        html = open(f"{component_dir}/{component_name}/{component_name}.html", "x")
        js = open(f"{component_dir}/{component_name}/{component_name}.js", "x")
        css = open(f"{component_dir}/{component_name}/{component_name}.css", "x")

        html.close()
        js.close()
        css.close()

def make_page(page_name):
    page_dir = settings.get("directories", "pages")
    directory_exist = os.path.isdir(f"{page_dir}/{page_name}")

    if directory_exist:
        raise Exception(f"There is already a page named {page_name}.")
    else: 
        os.mkdir(f"{page_dir}/{page_name}")
        html = open(f"{page_dir}/{page_name}/{page_name}.html", "x")
        js = open(f"{page_dir}/{page_name}/{page_name}.js", "x")
        css = open(f"{page_dir}/{page_name}/{page_name}.css", "x")

        html.close()
        js.close()
        css.close()

if __name__ == "__main__":
    function = sys.argv[1]

    if function == "make_component":
        make_component(sys.argv[2])

    if function == "make_page":
        make_page(sys.argv[2])

    if function == "run":
        run()