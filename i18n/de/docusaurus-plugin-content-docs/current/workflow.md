---
sidebar-position: 4
---

# Workflow

Dieses Dokument detailliert unseren Entwicklungsvorgang, von der lokalen Änderung bis hin zur Veröffentlichung auf der Webseite.

## Trunk-basierte Entwicklung

Dieses Projekt ("repository") folgt den Richtlinien von [Trunk based development](https://trunkbaseddevelopment.com/). Wir verwenden den "skalierbaren" Ansatz des Abzweigens und Zusammenführens ("merge") in einem Branch (`trunk`) mit Hilfe von Issues und Pull-Requests. Da wir `pnpm` für automatisierende Skripte verwenden, ist hier eine kurze Liste von üblichen Befehlen:

-   `sync`: **Empfohlener Arbeitsablauf!** Sichert lokale Änderungen ("commit"), aktualisiert das Wiki, lädt alles hoch ("push") und zieht neue Änderungen von dem Projekt automatisch in die lokale Kopie ("pull")
-   `commit`: Geführter Sicherungsprozess mit [konventionellen Commit](https://github.com/commitizen/cz-cli)nachrichten
-   `test`: Führt die gleichen Tests aus, die auch während der CI laufen
-   `pull`: Zieht neue Änderungen aus dem Projekt in die lokale Kopie (Bei lokalen Änderungen müssen Konflikte manuell behoben werden!)
-   `push`: Pusht Änderungen aus der lokalen Kopie zurück in das Projekt
