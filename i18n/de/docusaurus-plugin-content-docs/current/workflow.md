---
sidebar-position: 5
---

# Workflow

Dieses Dokument detailliert unseren Entwicklungsvorgang, von der lokalen Änderung bis hin zur Veröffentlichung auf der Webseite.

## Neuste Version beziehen

Die neuste Version kann mit dem [git](https://git-scm.com/) Versionierungssystem in eine lokale Kopie heruntergeladen werden (bei einem .zip-Download über GitHub ist git nicht eingerichtet): `git clone https://github.com/3x071c/schulport.git` Entgegen früherer Systeme wie Subversion (`svn`) ist git dezentral, da jeder Teilnehmer seine eigene Kopie hat.  
Sollte schon eine lokale Kopie bestehen, kann man stattdessen mittels `pnpm pull` die neusten Änderungen aus der Projekt-Repository herunterladen. Falls Dateikonflikte zwischen der Version auf GitHub und der lokalen Kopie bestehen, müssen diese manuell behoben werden.

## Einrichten

Zum erstmaligen Einrichten einer frischen lokalen Kopie sollte das `new` Skript ausgeführt werden. Es installiert `pnpm`, einen modernen Packetmanager, über den schon bestehenden `npm` Packetmanager, welcher mit der NodeJS-Runtime installiert wurde ([Hier](https://nodejs.org) kann NodeJS installiert werden). Hierzu ist ein Terminal erforderlich (auch als Kommandozeile, PowerShell usw. bekannt), welches im Ordner des Projektes geöffnet werden muss. Danach kann `npm run new` ausgeführt werden. [Mehr in der Setup-Anleitung](setup)  
Es ist außerdem eine gute Idee, im Voraus einen neuen git Branch für die lokale Entwicklung am Quellcode anzulegen, falls geplant wird, diese Änderungen auf GitHub hochzuladen: `git checkout -b <Name des Features, welches gerade entwickelt wird>`

## Entwickeln

Nun kann entwickelt werden! Wir empfehlen den Ordner in Visual Studio Code zu öffnen, darin das Terminal anzeigen zu lassen (Strg + J), und den folgenden Befehl auszuführen: `pnpm dev`. Auf der URL [localhost:3000](http://localhost:3000) befindet sich nun die Webseite. Wenn Änderungen am lokalen Quellcode vorgenommen werden, wird die (lokale) Webseite automatisch im Hintergrund neu kompiliert und aktualisiert. Mit (Strg + C) kann der Befehl im Terminal beendet werden.

## Trunk-basierter Ansatz

:::caution

Uns ist bewusst, das einige Skripte im Moment nicht (vollständig) auf Windows funktionieren. Wir empfehlen Linux für die Entwicklung.

:::

Dieses Projekt folgt den Richtlinien von [Trunk based development](https://trunkbaseddevelopment.com/). Wir verwenden den "skalierbaren" Ansatz des Abzweigens und Zusammenführens ("merge") in einem Branch (`trunk`) mit Hilfe von Issues und Pull-Requests. Die folgenden Skripte sollten als Referenz für die Interaktion mit `git` dienen (Hinweis: Diese Skripte müssen mit `pnpm`/`pnpm run` über die Kommandozeile aufgerufen werden):

-   `sync`: Sichert lokale Änderungen ("commit"), aktualisiert das Wiki, lädt alles hoch ("push") und zieht neue Änderungen von dem Projekt automatisch in die lokale Kopie ("pull")
-   `commit`: Geführter Sicherungsprozess mit [konventionellen Commit](https://github.com/commitizen/cz-cli)nachrichten
-   `test`: Führt die gleichen Tests aus, die auch während der CI laufen
-   `pull`: Zieht neue Änderungen aus dem Projekt in die lokale Kopie (Bei lokalen Änderungen müssen Konflikte manuell behoben werden!)
-   `push`: Pusht Änderungen aus der lokalen Kopie zurück in das Projekt

## Lokale Änderungen sichern

Im Anschluss an die [Entwicklung](#entwickeln) müssen Änderungen mittels `git` als Logeintrag gespeichert werden. Hierzu können die Oben aufgeführten Skripte `sync` und `commit` genutzt werden; wir empfehlen sync: `pnpm sync`. Danach wird man durch die automatisierte Formatierung, die Erstellung eines "commits" usw. geleitet. Sofern Kollaborator-Zugriff auf die GitHub Repository besteht, werden Änderungen automatisch auf dem Server gesichert. Es ist normal, dass das "sync" Skript mit Fehlermeldungen beendet wird. Sollte keine interaktive Kommandozeilenapplikation zum Sichern angezeigt worden sein, muss dies manuell ausgeführt werden: `git add -A`, danach `git cz`.

## Pull Request erstellen

Nachdem lokale Änderungen auf den Server übertragen wurden (z.B. mit dem `pnpm sync` Skript, oder einfach mit `git push -u origin HEAD`), kann ein Pull Request erstellt werden, welcher die Entwicklung für andere Teilnehmer sichtbar macht, Austausch über Änderungen ermöglicht und den CI/CD Prozess vereinfacht. Um einen Pull Request zu erstellen, braucht man Kollaboratorzugriff auf das GitHub Repository.

## Pull Request verfolgen

Pull Requests sind [hier](https://github.com/3x071c/schulport/pulls?q=is%3Apr) zu finden. Ein typischer Entwicklungsablauf sieht so aus:

![Beispiel: Pull Request](/img/pr.png)

Verschiedene Bots, wie `kodiak`, kümmern sich um einen möglichst automatisierten Ablauf

## Continuos Integration

Beim Sichern in der Repository werden automatisch Linter und Tests ausgeführt, um einheitlichen und korrekten Code zu garantieren. Nur funktionierender Code sollte (idealerweise) in der Produktion-Umgebung `trunk` landen

## Continuous Deployment

Wir nutzen [Vercel](https://vercel.com/), um automatisch jeden neuen Pull Request, und die Produktion-Umgebung auf [schulport.com](https://schulport.com) automatisch bei Änderungen zu aktualisieren bzw. als Vorschau.
