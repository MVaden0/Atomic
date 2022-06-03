
from templates import load_component, load_page

# api is the actual object that serves the files
class API:
    def __init__(self):
        self.routes = {}

    def route(self, path):
        def wrapper(handler):
            self.routes[path] = handler
            return handler

        return wrapper

    """
    def default_response(self, response):
        response.status_code = 404
        response.text = "Not found."

    def handle_request(self, request):
        response = Response()

        handler = self.find_handler(request_path=request.path)

        if handler is not None:
            handler(request, response)
        else:
            self.default_response(response)

        return response
    """
    def __call__(self, environ, start_response):
        response_body = bytes(load_page("main"), "utf-8")

        status = "200 OK"
        start_response(status, headers=[])
        return iter([response_body])

        """
        request = Request(environ)

        response = self.handle_request(request)

        return response(environ, start_response)
        """

"""
    def find_handler(self, request_path):
        for path, handler in self.routes.items():
            if path == request_path:
                return handler"""