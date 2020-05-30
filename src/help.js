module.exports = () => {
  process.stdout.write(
    `react-boilerplate-component generates the basic starter code for a React component. 
Usage:

make-component [componentName] [--option]

Options:
--class                        Generate a class component.
--help                         Show help screen.
-h                             Show help screen.


The only currently supported option is --class. Use this option if you want a class component.
Generates functional components by default.`
  );
};
