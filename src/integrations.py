"""
Moduł integracji z polubionymi narzędziami na GitHubie:
- agency-agents (msitarzewski/agency-agents)
- n8n (n8n-io/n8n)
- openclaw (openclaw/openclaw)
- higgsfield-ai CLI (higgsfield-ai/cli)
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
