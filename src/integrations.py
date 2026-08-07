"""
Moduł integracji z polubionymi narzędziami na GitHubie (Starred Ecosystem 2026):
- agency-agents (msitarzewski/agency-agents)
- n8n (n8n-io/n8n)
- openclaw (openclaw/openclaw)
- higgsfield-ai CLI (higgsfield-ai/cli)
- dzhng/deep-research & open_deep_research
- firecrawl/firecrawl & open-lovable
- unclecode/crawl4ai & browser-use/browser-use
- twentyhq/twenty CRM & calcom/cal.diy
- crewAIInc/crewAI & langchain-ai/langgraph
"""
import requests
import json
from typing import Optional, Dict, Any

class AgencyAgentsHelper:
    """Pomocnik do pracy z personami agentów AI z repozytorium msitarzewski/agency-agents."""
    BASE_URL = "https://api.github.com/repos/msitarzewski/agency-agents/contents"

    @classmethod
    def list_departments(cls) -> list:
        """Zwraca listę dostępnych działów (np. engineering, marketing, security)."""
        response = requests.get(cls.BASE_URL)
        if response.status_code == 200:
            items = response.json()
            return [item['name'] for item in items if item['type'] == 'dir' and not item['name'].startswith('.')]
        return []

class N8nWebhookCaller:
    """Pomocnik do wywoływania webhooków i przepływów n8n."""
    def __init__(self, webhook_url: str):
        self.webhook_url = webhook_url

    def trigger_workflow(self, payload: Dict[str, Any]) -> Optional[Dict[str, Any]]:
        """Wysyła dane do określonego webhooka w n8n."""
        try:
            response = requests.post(self.webhook_url, json=payload, timeout=10)
            return response.json()
        except Exception as e:
            print(f"Błąd wywołania webhooka n8n: {e}")
            return None

class OpenClawHelper:
    """Struktura dla automatyzacji w stylu OpenClaw."""
    @staticmethod
    def info():
        return "OpenClaw - platforma asystenta i automatyzacji zadań na dowolny OS."

class HiggsfieldHelper:
    """Struktura dla integracji z narzędziem wiersza poleceń Higgsfield CLI."""
    @staticmethod
    def info():
        return "Higgsfield CLI - narzędzie do generowania i obróbki mediów AI z poziomu terminala."

class DeepResearchHelper:
    """Struktura dla integracji z narzędziami Deep Research (dzhng/deep-research, Alibaba-NLP/DeepResearch)."""
    @staticmethod
    def info():
        return "Deep Research - agent do iteracyjnego pogłębionego wyszukiwania informacji i syntezy wiedzy."

class FirecrawlHelper:
    """Struktura dla API Firecrawl & Open-Lovable do ekstrakcji treści i klonowania stron."""
    @staticmethod
    def info():
        return "Firecrawl & Open-Lovable - ekstrakcja danych ze stron w formacie LLM-ready oraz natychmiastowe generowanie interfejsów w React."

class Crawl4AIHelper:
    """Struktura dla narzędzi Crawl4AI & Browser-use do zautomatyzowanego prospectingu leadów."""
    @staticmethod
    def info():
        return "Crawl4AI & Browser-use - inteligentne roboty przeglądarkowe do pobierania danych o obiektach bez stron internetowych."

class TwentyCRMHelper:
    """Struktura dla otwartego systemu CRM Twenty (twentyhq/twenty)."""
    @staticmethod
    def info():
        return "Twenty CRM - otwartoźródłowy CRM zoptymalizowany pod AI do zarządzania relacjami z klientami agencji."

class CalComHelper:
    """Struktura dla systemu rezerwacyjnego Cal.com (calcom/cal.diy)."""
    @staticmethod
    def info():
        return "Cal.com - system bezpośrednich rezerwacji eliminujący prowizje portalowe."

class CrewAIHelper:
    """Struktura dla orkiestracji wieloagentowej CrewAI & LangGraph."""
    @staticmethod
    def info():
        return "CrewAI & LangGraph - platformy orkiestracji zespołów autonomicznych agentów AI."
