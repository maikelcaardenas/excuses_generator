function excuses() {
    let pronoun = ['I'];
    let emotion = ['bad', 'tired', 'sick', 'sad', 'weird', 'lazy', 'busy', 'stressed', 'confused', 'anxious'];
    let verb = ['feel', 'am'];
    let situation = ['before the class', 'before waking up', 'with these clothes', 'doing the exercises', 'eating healthy', 'watching TV', 'working late', 'helping a friend', 'having a headache', 'running errands'];

    let first = pronoun[0];
    let second = emotion[Math.floor(Math.random() * emotion.length)];
    let third = verb[Math.floor(Math.random() * verb.length)];
    let fourth = situation[Math.floor(Math.random() * situation.length)];

    let complete_arguments = 'because ' + first + ' ' + third + ' ' + second + ' ' + fourth + '.';
    return complete_arguments;
}
