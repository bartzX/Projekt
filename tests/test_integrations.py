"""
Testy dla modułu integracji z narzędziami z GitHuba.
"""
import unittest
from src.integrations import OpenClawHelper, HiggsfieldHelper

class TestIntegrations(unittest.TestCase):
    def test_openclaw_info(self):
        info = OpenClawHelper.info()
        self.assertIn("OpenClaw", info)

    def test_higgsfield_info(self):
        info = HiggsfieldHelper.info()
        self.assertIn("Higgsfield CLI", info)

if __name__ == "__main__":
    unittest.main()
