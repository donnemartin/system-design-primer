"""Python project configuration and dependencies"""
from setuptools import setup, find_packages

setup(
    name='system-design-primer',
    version='1.0.0',
    description='Organized resources to learn and teach system design. Interview prep.',
    author='Donne Martin',
    author_email='contact@donnemartin.com',
    url='https://github.com/donnemartin/system-design-primer',
    packages=find_packages(),
    python_requires='>=3.7',
    install_requires=[
        'mrjob>=0.7.4',
    ],
    extras_require={
        'dev': [
            'pytest>=6.0',
            'pytest-cov>=2.10',
            'flake8>=3.8',
            'black>=20.8b1',
            'mypy>=0.800',
        ]
    },
    classifiers=[
        'Development Status :: 4 - Beta',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: Apache Software License',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.7',
        'Programming Language :: Python :: 3.8',
        'Programming Language :: Python :: 3.9',
        'Programming Language :: Python :: 3.10',
    ],
)
