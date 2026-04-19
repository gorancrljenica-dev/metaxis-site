---
title: "Testiranje Scheduler-a: Praktičan Vodič"
date: "2026-04-19"
slug: "testiranje-scheduler-a"
excerpt: "Naučite kako efikasno testirati scheduler logiku i planiranje taskova u vašim aplikacijama."
tags: ["Testing", "Scheduler", "Best Practices"]
readTime: "5 min čitanja"
---

## Testiranje Scheduler-a: Praktičan Vodič

Scheduler je kritična komponenta većine aplikacija, odgovorna za izvršavanje taskova u pravom trenutku. Međutim, testiranje scheduler logike često predstavlja izazov jer uključuje vremenske komponente i asinkrone operacije.

### Zašto je Testiranje Scheduler-a Važno?

Loše testirani scheduler može dovesti do:
- Taskova koji se ne izvršavaju u očekivanom vremenu
- Race condition-a i data integrity problema
- Propuštenih kritičnih operacija
- Degradacije performansi u produkciji

### Osnovni Pristup Testiranju

**Korišćenje Mock-a za Vrijeme**

Umjesto čekanja na stvarno vrijeme, koristite mock objektive:

```javascript
jest.useFakeTimers();
const mockTime = new Date('2026-04-19T10:00:00Z');
jest.setSystemTime(mockTime);

// Vaš test kod
scheduler.execute();

expect(mockFunction).toHaveBeenCalledAt(expectedTime);
jest.useRealTimers();
```

### Testiranje Execution Flow-a

Provjerite da se taskovi izvršavaju u ispravnom redoslijedu i vremenu:

```javascript
describe('Scheduler', () => {
  it('treba izvršiti task u planiranom vremenu', () => {
    const scheduler = new Scheduler();
    const callback = jest.fn();
    
    scheduler.schedule(callback, 5000);
    jest.advanceTimersByTime(5000);
    
    expect(callback).toHaveBeenCalled();
  });
});
```

### Testiranje Error Handling-a

Osigurajte da scheduler pravilno rukovati greškama:

```javascript
it('treba nastaviti rad nakon greške', () => {
  const scheduler = new Scheduler();
  const failingTask = jest.fn().mockRejectedValue(new Error('Task failed'));
  const successTask = jest.fn().mockResolvedValue(true);
  
  scheduler.schedule(failingTask, 1000);
  scheduler.schedule(successTask, 2000);
  
  jest.runAllTimers();
  
  expect(failingTask).toHaveBeenCalled();
  expect(successTask).toHaveBeenCalled();
});
```

### Testiranje Concurrency-a

Provjerite kako scheduler upravlja istovremenim taskovima:

```javascript
it('treba izvršiti multiple taskove paralelno', () => {
  const scheduler = new Scheduler({ maxConcurrent: 3 });
  const tasks = Array(5).fill(jest.fn());
  
  tasks.forEach((task, i) => scheduler.schedule(task, i * 1000));
  jest.runAllTimers();
  
  tasks.forEach(task => expect(task).toHaveBeenCalled());
});
```

### Best Practices

1. **Izolirajte Vrijeme**: Koristite fake timers za deterministički test
2. **Testirajte Edge Cases**: Null taskovi, cancelled schedulesi, retry logika
3. **Mjerite Performanse**: Dodajte testove koji provjeravaju brzinu izvršavanja
4. **Integracijski Testovi**: Testirajte sa stvarnom bazom podataka u staging okruženju
5. **Monitoring**: Implementirajte logovanje za debug informacije

### Zaključak

Testiranje scheduler-a zahtijeva kombinaciju unit i integracijskih testova sa fokusnom na vremenske elemente. Korišćenjem mock-a za vrijeme i pažljivom strukturom testova, možete osigurati pouzdanost ključne infrastrukture vaše aplikacije.