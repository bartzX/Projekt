"""
Testy dla modułu integracji z narzędziami z GitHuba (Pełny Stack Agencji AAAS 2026).
"""
import unittest
from src.integrations import (
    OpenClawHelper,
    HiggsfieldHelper,
    DeepResearchHelper,
    FirecrawlHelper,
    Crawl4AIHelper,
    TwentyCRMHelper,
    CalComHelper,
    CrewAIHelper
)

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

    def test_firecrawl_info(self):
        info = FirecrawlHelper.info()
        self.assertIn("Firecrawl", info)

    def test_crawl4ai_info(self):
        info = Crawl4AIHelper.info()
        self.assertIn("Crawl4AI", info)

    def test_twenty_crm_info(self):
        info = TwentyCRMHelper.info()
        self.assertIn("Twenty CRM", info)

    def test_calcom_info(self):
        info = CalComHelper.info()
        self.assertIn("Cal.com", info)

    def test_crewai_info(self):
        info = CrewAIHelper.info()
        self.assertIn("CrewAI", info)

if __name__ == "__main__":
    unittest.main()
