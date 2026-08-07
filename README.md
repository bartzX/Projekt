# Projekt (`bartzX/Projekt`) 🚀

W pełni zautomatyzowane repozytorium GitHub wykorzystujące 100% dobrych praktyk i integracji CI/CD oraz wsparcie dla ulubionych narzędzi AI/automatyzacji z Twoich gwiazdek na GitHubie.

---

## 🌟 Integracje z narzędziami ze Starred GitHuba

W katalogu `src/` znajduje się moduł `integrations.py` gotowy do integracji z:
- 🤖 **agency-agents** (`msitarzewski/agency-agents`) – pobieranie i praca z wyspecjalizowanymi personami agentów AI,
- ⚡ **n8n** (`n8n-io/n8n`) – obsługa webhooków i workflowów,
- 🦞 **openclaw** (`openclaw/openclaw`) – szkielet automatyzacji dla asystentów AI,
- 🎬 **higgsfield-ai CLI** (`higgsfield-ai/cli`) – obsługa generowania mediów.

---

## 🛠️ Wykorzystane mechanizmy GitHuba (100% możliwości)

1. **GitHub Actions (`.github/workflows/ci.yml`)** – automatyczny potok CI/CD testujący jakość kodu (`pytest`) na każdy `push`, `pull_request` oraz z możliwością ręcznego wywołania (`workflow_dispatch`).
2. **Dependabot (`.github/dependabot.yml`)** – cotygodniowe automatyczne sprawdzanie aktualizacji zależności Python oraz akcji CI.
3. **Szablony Zgłoszeń i Pull Requestów (`.github/ISSUE_TEMPLATE/...`, `.github/PULL_REQUEST_TEMPLATE.md`)** – ustandaryzowane szablony do zgłaszania błędów, propozycji nowych funkcji oraz PR-ów.
4. **Właściciele Kodu (`.github/CODEOWNERS`)** – automatyczne przypisywanie autora (`@bartzX`) do recenzowania zmian.

---

## 💻 Uruchamianie testów lokalnie

```bash
pip install -r requirements.txt
pytest
```
