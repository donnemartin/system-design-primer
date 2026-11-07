"""Regression tests for repeated reachability and shortest-path queries."""
import contextlib
import io
from pathlib import Path
import unittest

from social_graph_snippets import Graph, State


class Node:
    # Searching by identity must not require nodes to be hashable.
    __hash__ = None

    def __init__(self, key):
        self.key = key
        self.adj_nodes = {}
        self.visit_state = State.unvisited

    def connect(self, other):
        self.adj_nodes[other.key] = other


class ReachabilityTests(unittest.TestCase):
    def setUp(self):
        self.graph = Graph()
        self.a, self.b, self.c, self.d = [Node(key) for key in "abcd"]
        self.a.connect(self.b)
        self.b.connect(self.c)
        self.c.connect(self.a)

    def search(self, source, dest):
        with contextlib.redirect_stdout(io.StringIO()):
            return self.graph.bfs(source, dest)

    def test_repeated_search_finds_same_destination(self):
        self.assertTrue(self.search(self.a, self.c))
        self.assertTrue(self.search(self.a, self.c))

    def test_search_after_early_return_finds_other_destination(self):
        self.assertTrue(self.search(self.a, self.b))
        self.assertTrue(self.search(self.a, self.c))

    def test_previsited_nodes_do_not_block_new_search(self):
        self.b.visit_state = State.visited
        self.assertTrue(self.search(self.a, self.c))

    def test_search_leaves_node_states_unchanged(self):
        self.assertTrue(self.search(self.a, self.c))
        self.assertTrue(all(node.visit_state == State.unvisited for node in (self.a, self.b, self.c)))

    def test_unreachable_destination_in_cycle(self):
        self.assertFalse(self.search(self.a, self.d))
        self.assertFalse(self.search(self.a, self.d))
        self.assertTrue(self.search(self.a, self.c))

    def test_source_is_destination(self):
        self.assertTrue(self.search(self.a, self.a))

    def test_missing_endpoints(self):
        self.assertFalse(self.search(None, self.a))
        self.assertFalse(self.search(self.a, None))


class ShortestPathTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        readme = Path(__file__).with_name("README.md").read_text(encoding="utf-8")
        snippet = readme.split("```python\n", 1)[1].split("```", 1)[0]
        namespace = {"Graph": Graph, "State": State}
        from collections import deque
        namespace["deque"] = deque
        exec(compile(snippet, "README.md", "exec"), namespace)
        cls.graph_class = namespace["Graph"]

    def setUp(self):
        self.graph = self.graph_class()
        self.a, self.b, self.c, self.d = [Node(key) for key in "abcd"]
        self.a.connect(self.b)
        self.b.connect(self.c)
        self.c.connect(self.a)

    def test_repeated_shortest_path(self):
        self.assertEqual(self.graph.shortest_path(self.a, self.c), ["a", "b", "c"])
        self.assertEqual(self.graph.shortest_path(self.a, self.c), ["a", "b", "c"])

    def test_shortest_path_after_early_return(self):
        self.assertEqual(self.graph.shortest_path(self.a, self.b), ["a", "b"])
        self.assertEqual(self.graph.shortest_path(self.a, self.c), ["a", "b", "c"])

    def test_unreachable_then_reachable(self):
        self.assertIsNone(self.graph.shortest_path(self.a, self.d))
        self.assertEqual(self.graph.shortest_path(self.a, self.c), ["a", "b", "c"])

    def test_shortest_path_leaves_node_states_unchanged(self):
        self.graph.shortest_path(self.a, self.c)
        self.assertTrue(all(node.visit_state == State.unvisited for node in (self.a, self.b, self.c)))

    def test_missing_or_identical_endpoints(self):
        self.assertIsNone(self.graph.shortest_path(None, self.a))
        self.assertIsNone(self.graph.shortest_path(self.a, None))
        self.assertEqual(self.graph.shortest_path(self.a, self.a), ["a"])


if __name__ == "__main__":
    unittest.main()
