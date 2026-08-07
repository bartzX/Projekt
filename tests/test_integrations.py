"""
Testy dla modułu integracji z narzędziami z GitHuba.
"""
import unittest
from src.integrations import OpenClawHelper, HiggsfieldHelper, DeepResearchHelper

class TestIntegrations(unittest.TestCase):
    def test_openclaw_info(self):
        info = OpenClawHelper.info()
        self.assertIn("OpenClaw", info)

    def test_higgsfield_info(self):
        info = HiggsfieldHelper.info()
        self.assertIn("Higgsfield CLI", info)

    def test_deep_research_info(self):
        info = DeepResearchHelper.info()
        self.assertIn("Deep Research", info)

if __name__ == "__main__":
    unittest.main()
