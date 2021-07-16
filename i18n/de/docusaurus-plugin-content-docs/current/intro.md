---
sidebar_position: 1
---

# Einführung

Schulport ist eine plattformübergreifende Anwendung, die mit [Web-Technologien](https://developer.mozilla.org/docs/learn) in [TypeScript](https://www.typescriptlang.org/) (einem typisierten Compiler für JavaScript, die Skriptsprache des Internets), [React](https://reactjs.org/) (eine deklarative, komponentenbasierte, reaktive UI-Bibliothek), [NextJS](https://nextjs.org/) (ein Framework, dass das schreiben einer App in purem React bzw. JavaScript leicht macht), [Ionic](https://ionicframework.com/)/[Capacitor](https://capacitorjs.com/) (ein plattformübergreifender, hybrider Web-App-Wrapper für native Funktionen und Komponenten mit nativem Look), [TailwindCSS](https://tailwindcss.com/) (ein kompiliertes, "utility-first" CSS-Framework) und [jotai](https://jotai.pmnd.rs/) (eine React-Zustandsmanagement-Bibliothek) geschrieben wurde. Sie ermöglicht den Schülern, wichtige Termine, Veranstaltungen, Hausaufgaben und Vertretungen einfach einzusehen.

## Schnellstart

### Über GitHub

Das gesamte Quellcode kann über [unsere GitHub-Repository](https://github.com/3x071c/schulport) eingesehen werden. Sofern keine lokale Bearbeitung notwendig ist, reicht die Web UI aus.

### Über GitPod

Unser Projekt ist besonders leicht mit [GitPod](https://gitpod.io) aufzusetzen. GitPod ist eine vorkonfigurierte Entwicklungsumgebung basierend auf Visual Studio Code, auf welche von überall praktisch im Browser zugegriffen werden kann. Es ist keine lokale Installation erforderlich, und alles ist schon eingerichtet. Auch eine lokale Vorschau (z.B. mit `pnpm dev`, siehe [Entwicklung](development)) ist direkt aus der IDE möglich. [Hier klicken, um die Repository in GitPod zu öffnen](https://gitpod.io/#github.com/3x071c/schulport) (Nach dem Öffnen muss im Terminal `npm run new` ausgeführt werden - wir arbeiten daran, dies zu automatisieren. Wie bei der "gewöhnlichen", lokalen Einrichtung auch sollten die empfohlenen Erweiterungen für den Editor installiert werden (Dialogbox unten rechts beim Öffnen))

### Über den .zip-Download

GitHub bietet auch einen .zip-Download für Repositories an. [Download](https://github.com/3x071c/schulport/archive/refs/heads/trunk.zip) Achtung: Der Ordner hat git **nicht** eingerichtet. git-Befehle und Skripte, welche git nutzen, werden nicht funktionieren. Lokale Änderungen & Vorschau ist wie in den folgenden Dokumentationsseiten beschrieben möglich.

### Über git

Diese Methode wird für Entwickler empfohlen, die an unserer Projekt mitarbeiten wollen. Der folgende Befehl lädt die Repository herunter. Alle git-Befehle und Skripte werden im heruntergeladenen Ordner funktionieren (dies inkludiert das aktualisieren der lokalen Kopie mit `pnpm pull` oder ähnlichem):

```sh
$ git clone https://github.com/3x071c/schulport.git
```

Befehle wie diese müssen in einer Kommandozeilenumgebung wie dem Terminal (macOS/Linux) oder CMD/PowerShell (Windows) ausgeführt werden. Der Befehl legt einen Unterordner `schulport` in dem Ordner an, in welchem die Kommandozeile geöffnet wurde.
