import os
from tracemalloc import start

from settings import settings


def insert_component_html(html):
    # start and end indexes for search
    start_index = 0
    stop_index = 0

    # search until nothing is found
    while start_index != -1 and stop_index != -1:
        # find new start index and stop index
        start_index = html.find("<<", start_index)
        stop_index = html.find(">>", stop_index)

        if start_index == -1 or stop_index == -1:
            break

        # component attributes
        component_name = html[start_index + 2:stop_index]
        component_html = load_component(component_name, "html")

        # add new component and replace old component
        html = html[:start_index] + component_html + html[stop_index + 2:]

        # compute offset and add it to indexes
        component_offset = len(component_html) - len(component_name)
        start_index += component_offset
        stop_index += component_offset

    html = insert_component_js(html, component_name)

    return html
    

def insert_component_js(html, component_name):
    # start and end indexes for search
    js = load_component(component_name, "js")
    script_index = html.find("<script>") + 8

    return html[:script_index] + js + html[script_index:]

def get_file(file_name):
    # read and return contents
    with open(file_name, "r") as f:
        contents = f.read()
        f.close()

    return contents

def load_component(component_name, file_type):
    # get file location
    component_dir = os.path.join(settings.get("directories", "rootdir"), settings.get("directories", "components"), component_name)
    html = get_file(os.path.join(component_dir, f"{component_name}.{file_type}"))

    return html

def load_page(page_name):
    # get file location
    component_dir = os.path.join(settings.get("directories", "rootdir"), settings.get("directories", "pages"), page_name)

    # replace html
    html = insert_component_html(get_file(os.path.join(component_dir, f"{page_name}.html")))

    return html

print(load_page("main"))